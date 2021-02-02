#!/bin/sh

cd client && yarn &
cd server && yarn && yarn run dbinit
