"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Activity {
    constructor(accessibility, activity, key, link, participants, price, type) {
        this.accessibility = accessibility;
        this.activity = activity;
        this.key = key;
        this.link = link;
        this.participants = participants;
        this.price = price;
        this.type = type;
    }
}
function fetchBored(value) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(`http://www.boredapi.com/api/${value}`);
        let data = yield res.json();
        return data;
    });
}
let p = document.querySelector("#p");
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let link = document.querySelector("#link");
        let select = document.querySelector("#select");
        function getBySelected() {
            var _a;
            return ((_a = select.options[select.selectedIndex]) === null || _a === void 0 ? void 0 : _a.value) || "activity/";
        }
        function updateActivity() {
            return __awaiter(this, void 0, void 0, function* () {
                link.innerHTML = "";
                let option = getBySelected();
                let theActivity = yield fetchBored(option);
                p.innerHTML = theActivity.activity;
                getLink(theActivity);
                let tior = document.querySelector("#tior");
                tior.innerHTML = `this activity is for: ${theActivity.participants} pepole, and
its categorized as: ${theActivity.type}`;
            });
        }
        let refreshBtn = document.querySelector("#refreshBtn");
        refreshBtn.addEventListener("click", function () {
            updateActivity();
        });
        document.addEventListener("DOMContentLoaded", updateActivity);
        select.addEventListener("change", updateActivity);
        function getLink(theActivity) {
            if (theActivity.link !== "") {
                link.setAttribute("href", theActivity.link);
                link.style.display = "block";
                link.innerHTML = theActivity.link.toString();
            }
        }
    });
})();
