"use strict";function previewVideo$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.previewVideo$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.util.previewVideo";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"4.3.7"},_a[ddSdk_1.ENV_ENUM.android]={vs:"4.3.7"},_a[ddSdk_1.ENV_ENUM.pc]={vs:"4.6.33"},_a)),exports.previewVideo$=previewVideo$,exports.default=previewVideo$;