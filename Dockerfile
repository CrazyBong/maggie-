FROM node:20.11.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20.11.0-alpine AS runner
RUN addgroup --system appgroup && adduser --system appuser --ingroup appgroup
USER appuser
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
