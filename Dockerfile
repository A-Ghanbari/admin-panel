FROM registry.mn.nafis.cloud/base/node:14.18.1-slim
WORKDIR /app
RUN yarn global add serve

COPY package.json .
COPY yarn.lock .

RUN yarn

#FROM registry.mn.nafis.cloud/base/node:14.16.1-slim
COPY ./ /app
#COPY --from=builder /app/node_modules ./node_modules
RUN yarn build
EXPOSE 5002
CMD ["serve", "-l", "5002", "-s", "build"]
