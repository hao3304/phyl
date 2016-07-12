#!/usr/bin/env node

require("shelljs/global");
rm("-r","www/webapp/member");
cd("source/member");
exec("fis3 release prod -d ../../www");
exec("fis3 release -w");

