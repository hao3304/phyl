#!/usr/bin/env node

require("shelljs/global");
rm("-r","www/webapp/member");
cd("source/member");
exec("fis3 release prod -d ../../www");

rm("-r","www/webapp/admin");
cd("../source/admin");
exec("fis3 release prod -d ../../www");

rm("-r","www/webapp/staff");
cd("../source/staff");
exec("fis3 release prod -d ../../www");