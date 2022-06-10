define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        _newurl:appConfig.newUrl,
        // 1---差异分析
        differenceAnalysis: function (layer1,layer2) {
            
            var def = new Deferred();
            request(this._newurl+ `/differenceAnalysis/differenceAnalysis?TabeleName1=${layer1}&TabeleName2=${layer2}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:regionCode,
                    
                },
                handleAs: "json",
                method: "GET"
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
         // 差异分析结果
         differenceAnalysisResult: function (layer1,layer2) {
            var def = new Deferred();
            request(this._newurl +  `/differenceAnalysis/selectDifferenceAnalysisResult?TabeleName1=${layer1}&TabeleName2=${layer2}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:regionCode,
                },
                handleAs: "json",
                method: "GET"
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },

        // 2----冲突分析
        conflictAnalysis: function (layer1,layer2) {
            var def = new Deferred();
            request(this._newurl + `/conflict-analysis/conflictAnalysis?conflictLayer=${layer1}&conflictedLayer=${layer2}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                        
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        //  冲突分析结果
        conflictAnalysisResult: function (layer1,layer2) {
            var def = new Deferred();
            request(this._newurl + `/conflict-analysis/conflictAnalysis?conflictLayer=${layer1}&conflictedLayer=${layer2}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },

    }

});

