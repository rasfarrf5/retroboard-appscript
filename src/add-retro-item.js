function addRetroItem(content) {
    const retroItem = JSON.parse(content);

    if (retroItem.isWentWell) {
        addWentWellRetroItem(retroItem);
    } else if (retroItem.isToImprove) {
        addToImproveRetroItem(retroItem);
    } else if (retroItem.isActionItem) {
        addActionItemsRetroItem(retroItem);
    } else if (retroItem.isIdea) {
        addIdeasRetroItem(retroItem);
    } else if (retroItem.isThanks) {
        addThanksRetroItem(retroItem);
    }
}

function addWentWellRetroItem(retroItem) {
    const retroSheet = getRetroSheet();

    var rowNumber = getLastAvailableRowIndex("A1:A");

    retroSheet.getRange(rowNumber, 1).setValue(retroItem.id);
    retroSheet.getRange(rowNumber, 2).setValue(JSON.stringify(retroItem.item));
}

function addToImproveRetroItem(retroItem) {
    const retroSheet = getRetroSheet();

    var rowNumber = getLastAvailableRowIndex("C1:C");

    retroSheet.getRange(rowNumber, 3).setValue(retroItem.id);
    retroSheet.getRange(rowNumber, 4).setValue(JSON.stringify(retroItem.item));
}

function addActionItemsRetroItem(retroItem) {
    const retroSheet = getRetroSheet();

    var rowNumber = getLastAvailableRowIndex("E1:E");

    retroSheet.getRange(rowNumber, 5).setValue(retroItem.id);
    retroSheet.getRange(rowNumber, 6).setValue(JSON.stringify(retroItem.item));
}

function addIdeasRetroItem(retroItem) {
    const retroSheet = getRetroSheet();

    var rowNumber = getLastAvailableRowIndex("G1:G");

    retroSheet.getRange(rowNumber, 7).setValue(retroItem.id);
    retroSheet.getRange(rowNumber, 8).setValue(JSON.stringify(retroItem.item));
}

function addThanksRetroItem(retroItem) {
    const retroSheet = getRetroSheet();

    var rowNumber = getLastAvailableRowIndex("I1:I");

    retroSheet.getRange(rowNumber, 9).setValue(retroItem.id);
    retroSheet.getRange(rowNumber, 10).setValue(JSON.stringify(retroItem.item));
}

function addPrevActionRetroItem(actionItems) {
    const retroSheet = getRetroSheet();
    actionItems.forEach(function(value, index) {
        var rowIndex = 2 + index;
        retroSheet.getRange(rowIndex, 11).setValue(value);
    });
}