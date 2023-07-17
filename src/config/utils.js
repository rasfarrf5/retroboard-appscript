// Get last data available row count
function getLastAvailableRowIndex(range) {
    const retroSheet = getRetroSheet();
    const column = retroSheet.getRange(range).getValues();

    return column.filter(String).length + 1;
}

function getRetroTitle() {
    const configSheet = getConfigSheet();
    const title = configSheet.getRange("A2").getValue();

    if (title == "") {
        return "!";
    }
    return title;
}

function clearRetroTitle() {
    const configSheet = getConfigSheet();
    return configSheet.getRange("A2").setValue("");
}

function setRetroTitle(title) {
    const configSheet = getConfigSheet();
    return configSheet.getRange("A2").setValue(title);
}

function getCompanyName() {
    const configSheet = getConfigSheet();

    return configSheet.getRange("B2").getValue();
}

function getCompanyLogo() {
    const configSheet = getConfigSheet();

    return configSheet.getRange("C2").getValue();
}

function getCompletedLogo() {
    const configSheet = getConfigSheet();

    return configSheet.getRange("D2").getValue();
}

function getFeedbackUrl() {
    const configSheet = getConfigSheet();

    return configSheet.getRange("E2").getValue();
}