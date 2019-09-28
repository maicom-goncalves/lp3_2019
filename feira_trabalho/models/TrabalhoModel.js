const TrabalhoModel = (sequelize, DataTypes) => {

    const Trabalho = sequelize.define('Trabalho', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orientador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        estudante3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Datasubmissao: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {});

    return Trabalho;
};

module.exports = TrabalhoModel;