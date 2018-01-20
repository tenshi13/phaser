var Tileset = require('../../Tileset');

var ParseTilesets = function (json)
{
    var tilesets = [];
    var tilesetsNames = [];

    for (var i = 0; i < json.layer.length; i++)
    {
        var layer = json.layer[i];

        // A relative filepath to the source image (within Weltmeister) is used for the name
        var tilesetName = layer.tilesetName;

        // Only add unique tilesets that have a valid name. Collision layers will have a blank name.
        if (tilesetName !== '' && tilesetsNames.indexOf(tilesetName) === -1)
        {
            tilesetsNames.push(tilesetName);

            // Tiles are stored with an ID relative to the tileset, rather than a globally unique ID
            // across all tilesets. Also, tilesets in Weltmeister have no margin or padding.
            tilesets.push(new Tileset(tilesetName, 0, layer.tilesize, layer.tilesize, 0, 0));
        }
    }

    return tilesets;
};

module.exports = ParseTilesets;