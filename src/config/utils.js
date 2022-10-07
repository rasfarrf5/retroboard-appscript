// Get last data available row count
function getLastAvailableRowIndex(range) {
    const retroSheet = getRetroSheet();
    const column = retroSheet.getRange(range).getValues();

    return column.filter(String).length + 1;
}

function getRetroTitle() {
    const configSheet = getConfigSheet();
    const title = configSheet.getRange("A2").getValue();

    if (title === "") {
        return "UNKNOWN";
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