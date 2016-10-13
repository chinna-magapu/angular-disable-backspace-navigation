(function(angular) {
    angular.module('disableBackspaceNavigation', []).run(['$document', disableBackspaceNavigation]);

    function disableBackspaceNavigation($document) {
        $document.on('keydown', function(ev) {
            var code, isEditable, nodeName;
            code = ev.which;
            nodeName = ev.target.nodeName.toLowerCase();
            isEditable = ev.target.isContentEditable;
            if (code === 8 && !((nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') || isEditable)) {
                return ev.preventDefault();
            }
        });
    }
})(window.angular);
