'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('followings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idFollowing: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: id,
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('followings')
  },
}
