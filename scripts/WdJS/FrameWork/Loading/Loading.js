define(['./loadDialog'],
    function (loadDialog) {

        var util = {
            _loading: null,

            show: function (dom) {
               
                this._loading = new loadDialog().placeAt(dom);
                this._loading.startup();
                
            },
            hide: function () {
                if (this._loading != null) {
                    this._loading.destroy();
                    this._loading = null;
                }
            }
        };
        return util;
    });