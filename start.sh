#!/bin/sh

cd server && yarn start &
cd client && yarn start
