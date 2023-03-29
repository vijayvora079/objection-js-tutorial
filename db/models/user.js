const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    const Channel = require('./channel');
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        filter: (query) => query.select('channel.id', 'channel.name'),
        join: {
          from: 'user.channelId',
          to: 'channel.id',
        },
      },
    };
  }
}

module.exports = User;
