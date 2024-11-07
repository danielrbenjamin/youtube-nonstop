Object.defineProperty(document, "visibilityState", {
    get: function() {
        return "visible";
    }
});

Object.defineProperty(document, "webkitVisibilityState", {
    get: function() {
        return "visible";
    }
});

Object.defineProperty(document, "hidden", {
    get: function() {
        return false;
    }
});

["visibilitychange", "webkitvisibilitychange"].forEach((eventType) => {
    document.addEventListener(eventType, (event) => {
        event.stopImmediatePropagation();
    }, true);
});

if (typeof ytcsi !== "undefined" && typeof ytcsi.tick === "function") {
    ytcsi.tick = function() {};
}