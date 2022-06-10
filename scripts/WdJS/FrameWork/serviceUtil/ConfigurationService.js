define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe",
    "FrameWork/DatabaseConfig",
], function (Deferred, request, iframe,DatabaseConfig) {
    return {
        _url3: appConfig.url,
        _newurl:appConfig.newUrl,
      
        // 模块-----------------------------------
     
        getModule: function (data) {
            var def = new Deferred();
            request(this._url3+ `/module/getModulesByPage`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
      
        deleteModule: function (id) {
            var def = new Deferred();
            request(this._url3+ `/module/delModuleById?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
       
        updateModule: function (data) {
            var def = new Deferred();
            request(this._url3+ `/module/updateModule`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
     
        createModule: function (data) {
            var def = new Deferred();
            request(this._url3+ `/module/addModule`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        getAllModule: function () {
            var def = new Deferred();
            request(this._url3+ `/module/getModules`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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
         // 导航栏--------------------------------
        getNavi:function(id){
        var def = new Deferred();
        request(this._url3+ `/navigationalbar/getNavigationalbars?userid=${id}`, {
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
        addNavi:function(data){
        var def = new Deferred();
        request(this._url3+ `/navigationalbar/addNavigationalbar`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            handleAs: "json",
            method: "POST",
            data: data
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
        delNavi:function(id){
        var def = new Deferred();
        request(this._url3+ `/navigationalbar/delNavigationalbarByid?id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            handleAs: "json",
            method: "DELETE"
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
        changeNavi:function(data){
        var def = new Deferred();
        request(this._url3+ `/navigationalbar/updateNavigationalbar`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            handleAs: "json",
            method: "POST",
            data: data
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
        // 2--
        getsubNavi:function(id){
            var def = new Deferred();
            // 
            request(this._url3+ `/navigationalbarSubmenu/getNavigationalbarSubmenusByNavigationalbarId?id=${id}`, {
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
     
        deletesubmenu:function(id){
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/delNavigationalbarSubmenuById?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        addsubMenu:function(data){
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/addNavigationalbarSubmenu`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        updatesubMenu: function (data) {
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/updateNavigationalbarSubmenu`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        // --3
        getSubMenuModule:function(id){
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/getNavigationalbarSubmenuById?id=${id}`, {
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
        
        addSubMenuMOdule:function(ModuleId,menuId){
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/addModule?ModuleId=${ModuleId}&navigationalbarSubmenuId=${menuId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST"
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

        deleteSubMenuMOdule:function(ModuleId,menuId){
            var def = new Deferred();
            request(this._url3+ `/navigationalbarSubmenu/delModule?ModuleId=${ModuleId}&navigationalbarSubmenuId=${menuId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST"
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

        // 评分--------------------
        getAllRating: function (data) {
            var def = new Deferred();
            request(this._url3+ `/rating/selectRatingList`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data:data
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
        getpjs:function(){
            var def = new Deferred();
            request(this._url3+ `/rating/statistic`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        // 工具-----------------toolbar
        // --1
        getAllToolbar:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbar/getToolbarByUserid?userid=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        addToolBar:function(data){
            var def = new Deferred();
            request(this._url3+ `/toolbar/addToolbar`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
 
        updateToolbar: function (data) {
            var def = new Deferred();
            request(this._url3+ `/toolbar/updateToolbar`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deleteToolbar:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbar/delToolbarByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        // ---2
        gettoolbarSubmenus:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbarSubmenu/getToolbarSubmenuByToolbarId?toolbarId=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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
        
        addtoolbarSubmenus:function(data){
            var def = new Deferred();
            request(this._url3+ `/toolbarSubmenu/addToolbarSubmenu`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deletetoolbarSubmenus:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbarSubmenu/delToolbarSubmenuByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        // --3
        gettoolbarMoudle:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbarSubmenu/getToolbarSubmenuById?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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
        
        addtoolbarMoudle:function(data){
            var def = new Deferred();
            request(this._url3+ `/SubmenuItems/addSubmenuItems`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deletetoolbarModule:function(ModuleId,menuId){
            var def = new Deferred();
            request(this._url3+ `/SubmenuItems/delSubmenuItem?moduleId=${ModuleId}&submenuId=${menuId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST"
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
        // --4
        deleteSiderbarModule:function(ModuleId,toolbarId){
            var def = new Deferred();
            request(this._url3+ `/toolbar/delModule?moduleId=${ModuleId}&toolbarId=${toolbarId}`, {
                handleAs: "json",
                method: "POST"
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
        addSiderbarModule:function(ModuleId,toolbarId){
            var def = new Deferred();
            request(this._url3+ `/toolbar/addModule?moduleId=${ModuleId}&toolbarId=${toolbarId}`, {
                handleAs: "json",
                method: "POST"
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

        getSiderbarModule:function(id){
            var def = new Deferred();
            request(this._url3+ `/toolbar/getToolbarModuleByToolbarid?toolbarid=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        // 快速导航栏-----------------
        getSideboxgroup:function(id){
            var def = new Deferred();
            $.ajax({
                url:  this._url3+ `/sideboxgroup/getSideboxGroupByUserid?userid=${id}`,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },

        getSideboxgroup2:function(id){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/getSideboxGroupByUserid?userid=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        deleteSideboxgroup:function(id){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/delSideboxGroupByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        addsideboxgroup:function(data){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/addSideboxGroup`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        changesideboxgroup:function(data){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/updateSideboxGroup`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        getsideboxgroupModule:function(id){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/getSideboxGroupByToolbarid?sideboxGroupid=${id}`, {
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

        deleteSideboxgroupModule:function(ModuleId,sideboxGroupId){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/delModule?moduleId=${ModuleId}&sideboxGroupId=${sideboxGroupId}`, {
                handleAs: "json",
                method: "POST"
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
      
        addsideboxgroupModule:function(ModuleId,sideboxGroupId){
            var def = new Deferred();
            request(this._url3+ `/sideboxgroup/addModule?moduleId=${ModuleId}&sideboxGroupId=${sideboxGroupId}`, {
                handleAs: "json",
                method: "POST"
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

        // 叠加分析-----------------

        // 1===
        getAllConflict:function(){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getAllConflictConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        getAllConflictBycode:function(code){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getConflictConfigByCode?code=${code}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        addConflict1:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/addConflictConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        changeConflict1:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/updateConflictConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deleteConflict1:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/delConflictConfigByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        // 2==
        getConflict2:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getConflictConfigGroupByConfigId?configid=${id}`, {
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

        addConflict2:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/addConflictConfigGroup`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deleteConflict2:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/delConflictConfigGroupByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        changeConflict2:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/updateConflictConfigGroup`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        // 3--
        getConflict3:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getConflictConfigGroupItemByGroupId?groupid=${id}`, {
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
      
        addConflict3:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/addConflictConfigGroupItem`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deleteConflict3:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/delConflictConfigGroupItemByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        changeConflict3:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/updateConflictConfigGroupItem`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
      
        // 4--
        getConflict4:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getConflictConfigGroupItemUrlByGroupId?itemid=${id}`, {
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
        addConflict4:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/addConflictConfigGroupItemUrl`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteConflict4:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/delConflictConfigGroupItemUrlByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        changeConflict4:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/updateConflictConfigGroupItemUrl`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        // 5--
        getConflictBycode:function(code){
            var def = new Deferred();
            request(this._url3+ `/conflicconfig/getConflictConfigByCode?code=${code}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
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

        // 统计分析 字符串转换
        getStatical:function(pageNum,pageSize,layerName){
            var def = new Deferred();
            if(layerName == null){
                var url= `/statistical-analysis-layer/selectStatisticalAnalysisLayer?pageNum=${pageNum}&pageSize=${pageSize}`
            }else{
                var url=`/statistical-analysis-layer/selectStatisticalAnalysisLayer?layerName=${layerName}&pageNum=${pageNum}&pageSize=${pageSize}`;
            }
            request(this._url3+ url, {
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

        addStatical:function(data){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer/insertStatisticalAnalysisLayer`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        changeStatical:function(data){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer/updateStatisticalAnalysisLayer`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deleteStatical:function(id){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer/deleteStatisticalAnalysisLayer/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
      
        // --2
        getStaticalfield:function(id){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer-field/selectStatisticalAnalysisLayerFieldByLayerId?layerId=${id}`, {
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

        getLayerfield:function(id){
            var def = new Deferred();
            // 找到tablename的queryurld database

            var layers=appConfig.map.getLayers().array_;
            for(var i=0;i<layers.length;i++){
                var layer=layers[i].values_;
                if( layer.id==id){
                    var database=layer.queryUrl.split("=")[4].split(":")[0];
                   var obj= DatabaseConfig.database.find(function (obj) {return obj.database == database; })
                    var code=obj.datacode;
                }
            }
            debugger
            request(this._newurl+ `/tableinformation/getTableInformationByTableName?tablename=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:code,
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

        addStaticalfield:function(data){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer-field/insertStatisticalAnalysisLayerField`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        deStaticalfield:function(id){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer-field/deleteStatisticalAnalysisLayerField/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        changeStaticalfield:function(data){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer-field/updateStatisticalAnalysisLayerField`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        // --seach ?
        seachStatical:function(code,layerName){
            var def = new Deferred();
            var url=`/statistical-analysis-layer/selectStatisticalAnalysisLayers`;
            if(code == null){
               if(layerName != null){
                url+=`?layerName=${layerName}`;
               }
            }else{
                url+=`?regionCode=${regionCode}`;
               if(layerName != null){
                url+=`&regionCode=${regionCode}`;
               }
            }
            request(this._url3+ url, {
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
        getStaticalByCode:function(code){
            var def = new Deferred();
            request(this._url3+ `/statistical-analysis-layer/selectStatisticalAnalysisLayers?regionCode=${code}`, {
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

        // 定制查询
        getCustomquery:function(data){
            var def = new Deferred();
            request(this._url3+ `/custom-query/selectAllCustomQueryPage`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        addCustomquery:function(data){
            var def = new Deferred();
            request(this._newurl+ `/custom-query/addcustomQuery`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:330300,
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        changeCustomquery:function(data){
            var def = new Deferred();
            request(this._newurl+ `/custom-query/updatecustomQuery`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:330300,
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteCustomquery:function(id){
            var def = new Deferred();
            request(this._url3+ `/custom-query/delcustomQuery/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        getCustomqueryByid:function(id){
            var def = new Deferred();
            request(this._url3+ `/custom-query/selectCustomQuery?userid=${id}`, {
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

        // 冲突配置
        getConflictAnaly:function(data,code){
            var def = new Deferred();
            request(this._url3+ `/conflict-analysis/selectConflictAnalysisByPage?code=${code}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        addConflictAnaly:function(data){
            debugger
            var def = new Deferred();
            request(this._url3+ `/conflict-analysis/addConflictAnalysis`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteConflictAnaly:function(id){
            var def = new Deferred();
            request(this._url3+ `/conflict-analysis/delConflictAnalysis/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        updataConflictAnaly:function(data){
            var def = new Deferred();
            request(this._url3+ `/conflict-analysis/updateConflictAnalysis`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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

        // 获取枚举值
        getEnumerated:function(fieldName,tableName){
            var def = new Deferred();
            request(this._newurl+ `/count/getProByTableNameAndFieldName?fieldName=${fieldName}&tableName=${tableName}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:330300,
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
        // 统计报表
        getDownloadconfig:function(){
            var def = new Deferred();
            request(this._url3+ `/downloadconfig/getAllDownLoadConfig`, {
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
        getDownloadconfigBycode:function(code){
            var def = new Deferred();
            request(this._url3+ `/downloadconfig/getAllDownLoadConfigByCode?code=${code}`, {
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
        addDownloadconfig:function(data){
            debugger
            var def = new Deferred();
            request(this._url3+ `/downloadconfig/addDownLoadConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        
        updataDownloadconfig:function(data){
            var def = new Deferred();
            request(this._url3+ `/downloadconfig/updateDownLoadConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteDownloadconfig:function(id){
            var def = new Deferred();
            request(this._url3+ `/downloadconfig/delDownLoadConfigByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

        // 周边查询
        getSurroundquery:function(){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/getAllSurroundQueryConfig`, {
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
        getSurroundqueryBycode:function(code){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/getSurroundQueryConfigByCode?code=${code}`, {
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
        addSurroundquery:function(data){
            debugger
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/addSurroundQueryConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        updataSurroundquery:function(data){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/updateSurroundQueryConfig`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteSurroundquery:function(id){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/delSurroundQueryConfigByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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

   

        getSurroundquery2:function(id){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/getSurroundQueryConfigLayerByConfigId?configid=${id}`, {
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
        addSurroundquery2:function(data){
            debugger
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/addSurroundQueryConfigLayer`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        updataSurroundquery2:function(data){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/updateSurroundQueryConfigLayer`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
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
        deleteSurroundquery2:function(id){
            var def = new Deferred();
            request(this._url3+ `/surroundqueryconfig/delSurroundQueryConfigLayerByid?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "DELETE"
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
        
        
    }
});

