﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS('zongyi-normal.ttf', font);
this.addFont('zongyi-normal.ttf', 'zongyi', 'normal');
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);