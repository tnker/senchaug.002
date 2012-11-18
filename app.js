Ext.application({
    name: 'SenchaUG',
    viewport: {
    	autoMaximize: true
    },
    controllers: ['Article'],
    views: ['Main', 'List', 'Detail'],
    stores: ['Articles'],
    models: ['Article'],
    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('SenchaUG.view.Main'));
    }
});