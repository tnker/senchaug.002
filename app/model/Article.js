/**
 * @class SenchaUG.model.Article
 * @extends Ext.data.Model
 * Description
 */
Ext.define('SenchaUG.model.Article', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'id',					type: 'int'},
			{name: 'name', 				type: 'string'},
			{name: 'post_date',		type: 'date'},
			{name: 'post_title',	type: 'string'},
			{name: 'post_content',type: 'string'}
		],
		proxy: { // 実際はここがWP側の記事一覧などの取得
			type: 'ajax',
			url: 'data/data.json',
			reader: {
				type: 'json'
			}
		}
	}
});