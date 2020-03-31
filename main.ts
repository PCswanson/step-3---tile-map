namespace SpriteKind {
    export const door = SpriteKind.create()
    export const Key = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    music.playMelody("D G F E - A - - ", 120)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    haveKey = 1
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (haveKey == 1) {
        otherSprite.destroy()
    } else {
        player1.y += -16
    }
})
let haveKey = 0
let player1: Sprite = null
player1 = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002040101010101010101010101010101040404040106060601070707070707010101010401010101010701010101070101010104040404010107010101010701010101040101010107070707070107010104040401070707060101010101070101010701010701010101010107070701010107010107010701010701070101010101070101070107010107010701070101010707010701070707070107070701010101070107010101010701070101010107070701070101010107010701010101070107010707070707070107070701010701010101010101010701010106010107070707070707070707070701060601010101010101010101010101010603`,
            img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . 2 
2 2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 
. . 2 . . . . 2 2 . 2 2 2 2 . 2 
2 2 2 . 2 2 2 2 . . . . . 2 . 2 
2 . . . 2 . . . . 2 2 2 2 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 . . . 2 
. 2 . 2 2 . 2 . 2 2 . 2 . 2 2 2 
. 2 . 2 2 . 2 . 2 2 . 2 . 2 . 2 
. 2 . . 2 . 2 . . . . 2 . . . 2 
2 2 2 . 2 . 2 2 2 2 . 2 . 2 2 2 
2 . . . 2 . 2 2 2 2 . 2 . 2 2 2 
2 . 2 . 2 . . . . . . 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`,
            [myTiles.tile0,sprites.dungeon.floorDark0,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,myTiles.tile1],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(player1, sprites.dungeon.stairSouth)
let yellowKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. 5 . . . 5 . . . 5 . 5 5 . 5 . 
. 5 . . . 5 5 5 5 5 5 5 5 5 5 . 
. 5 . . . 5 5 5 5 5 5 5 5 5 5 . 
. 5 . . . 5 . . 5 . 5 5 . . . . 
. 5 . . . 5 . . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
yellowKey.setPosition(104, 24)
haveKey = 0
let yellowDoor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 e e 5 5 5 5 5 5 5 5 5 . . 
. . 5 e e 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
`, SpriteKind.door)
yellowDoor.setPosition(232, 216)
let openDoor = 0
