/**
 * @class SenchaUG.store.Articles
 * @extends Ext.data.Store
 * Description
 */
Ext.define('SenchaUG.store.Articles', {
    extend: 'Ext.data.Store',
    config: {
	    model: 'SenchaUG.model.Article',
    },
    autoLoad: true
});