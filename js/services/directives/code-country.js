angular.module("listaTelefonica").directive("telefoneFormatar", function($filter) {
    return {
        require: "ngModel",
        link: function($scope, element, attrs, ctrl) {
            console.log("Scope", attrs);

            var fomartarNumero = function(value) {
                console.log("Scope", attrs);
                if ($scope.paisSelecionado.code === undefined) return;
                var ayt = PhoneNumber.getAsYouType($scope.paisSelecionado.code);
                ayt.addChar(value);
                if (value.length > 2) {
                    var pn = new PhoneNumber(value, $scope.paisSelecionado.code);
                    if (pn.getNumber('national') !== undefined) {
                        ctrl.$setViewValue(pn.getNumber('national'));
                        ctrl.$render();
                        return;
                    }

                };
            }

            element.bind("keyup", function() {
                fomartarNumero(ctrl.$viewValue);
                ctrl.$setViewValue(ctrl.$viewValue);
                ctrl.$render();
            });




        }
    }
})