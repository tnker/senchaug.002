Ext.define("SenchaUG.view.Main", {
    extend: 'Ext.Container',
    fullscreen: true,
    config: {
        layout: {
            type: 'card',
            animation: {type: 'slide'}
        },
        itemId: 'main',
        items: [{
            docked: 'top',
            xtype : 'titlebar',
            title : 'SenchaUG',
            items: [{
                    xtype: 'button',
                    itemId: 'backButton',
                    text: '戻る',
                    ui: 'back',
                    align: 'left',
                    hidden: true
                }]
            },
            {xtype: 'articlelist'},
            {xtype: 'articledetail'}
        ]
    }
});