var TablesCollection = require('./tables-collection');
var cdb = require('cartodb-deep-insights.js');

/**
 * Model representing a user
 */
module.exports = cdb.core.Model.extend({

  initialize: function (attrs, opts) {
    if (!opts.configModel) throw new Error('configModel is required');
    this._configModel = opts.configModel;

    this.tablesCollection = new TablesCollection(this.get('table_names'), {
      baseUrl: attrs.base_url,
      configModel: this._configModel
    });
  }
});