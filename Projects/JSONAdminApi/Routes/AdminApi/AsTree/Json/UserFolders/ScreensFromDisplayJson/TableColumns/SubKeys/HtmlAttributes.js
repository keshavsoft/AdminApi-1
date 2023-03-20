var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/HtmlAttributes.Controllers");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonControllers.Update);

module.exports = router;