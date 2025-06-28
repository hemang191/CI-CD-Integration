# Stage 1 : 

FROM node:21 AS backend-builder

WORKDIR /app

COPY . . 

RUN npm i 


# Stage 2: copy the above image in compressed form 

FROM node:21-slim

WORKDIR /app

# copy all the thing from the builder stage
COPY --from=backend-builder /app .

EXPOSE 3000

CMD ["npm", "start"]

