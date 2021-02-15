// delgetstei ajillah
var uiController = (function () {})();
// sanhuutei ajillah
var financeController = (function () {})();
// controllor holbogch
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1 oruulah ogogdol delgetsees olj avna
    console.log("delgetsees ogogdol awah heseg");
    // 2 olj awsan ogogdoluude sanhuugiin controlloroor damjuulj tend hadgalna

    // 3 olj avsan ogogdoluudee web dr tohiroh hesegt gargana

    // 4 tosowiig tootsoolno

    // 5 etsesiin uldegdel tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {});

  document.addEventListener("keypress", function (event) {
    if (event.key === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
