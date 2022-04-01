#!/bin/bash
set -e
cd /var/nodejs
rm -rf node_modules
npm install -g npm@latest
npm i core-util-is
#aws se ls #intentionally wrong command
pm2 startup
#systemctl status pm2-root.service
pm2 start npm --name Damac-nextjs -- start
pm2 save
