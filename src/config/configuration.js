// Retroboard sheet URL
var spreadSheet = SpreadsheetApp.openByUrl("YOUR_GOOGLE_SHEET_URL")

// Retroboard Main Sheet
var retroSheet = spreadSheet.getSheetByName("retrospective");

// Configuration Sheet
var configSheet = spreadSheet.getSheetByName("config");

function getRetroSheet() {
    return retroSheet;
}

function getConfigSheet() {
    return configSheet;
}

function getSpreadSheet() {
    return spreadSheet;
}