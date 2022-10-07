function getWentWellMessages(username, sheetName) {
    let content;

    if (sheetName === "") {
        content = retroSheet.getRange("A2:B30").getValues();
    } else {
        content = getSpreadSheet().getSheetByName(sheetName).getRange("A2:B30").getValues();
    }

    return getMessagesList(username, content);
}

function getToImproveMessages(username, sheetName) {
    let content;

    if (sheetName === "") {
        content = retroSheet.getRange("C2:D30").getValues();
    } else {
        content = getSpreadSheet().getSheetByName(sheetName).getRange("C2:D30").getValues();
    }

    return getMessagesList(username, content);
}

function getActionItemsMessages(username, sheetName) {
    let content;

    if (sheetName === "") {
        content = retroSheet.getRange("E2:F30").getValues();
    } else {
        content = getSpreadSheet().getSheetByName(sheetName).getRange("E2:F30").getValues();
    }

    return getMessagesList(username, content);
}

function getIdeasMessages(username, sheetName) {
    let content;

    if (sheetName === "") {
        content = retroSheet.getRange("G2:H30").getValues();
    } else {
        content = getSpreadSheet().getSheetByName(sheetName).getRange("G2:H30").getValues();
    }

    return getMessagesList(username, content);
}

function getThanksMessages(username, sheetName) {
    let content;

    if (sheetName === "") {
        content = retroSheet.getRange("I2:J30").getValues();
    } else {
        content = getSpreadSheet().getSheetByName(sheetName).getRange("I2:J30").getValues();
    }

    return getMessagesList(username, content);
}

function getPrevActionMessages() {
    return retroSheet.getRange("K2:K30").getValues()
        .filter(function (t) {
            return t[0] !== "";
        });
}

function getPreviousRetroboardList() {
    return getSpreadSheet().getSheets()
        .filter(function (t, index) {
            return index >= 2;
        })
        .map(function (e, index) {
            return {
                name: e.getName(),
                id: "sheet-" + index
            };
        });
}

function getMessagesList(username, content) {
    return content
        .filter(function (t) {
            return t[0] !== "";
        })
        .map(function (e) {
            return {
                id: e[0],
                item: e[1],
                showDelete: e[0].includes(username)
            }
        });
}