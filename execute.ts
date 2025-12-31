/**
 * Execute Command Helper - Custom Blocks
 * Based on: https://keiduki.hatenablog.com/entry/2020/04/27/230935
 */

//% block="Execute Commands"
//% color="#e74c3c"
//% icon="\uf0e7"
namespace executeCmd {

    /**
     * Anchor point options for facing entity
     */
    export enum AnchorPoint {
        //% block="feet"
        Feet,
        //% block="eyes"
        Eyes
    }

    // ==================== BASIC EXECUTE (★★★ 必須レベル) ====================

    /**
     * Execute a command as a target at their location
     * @param selector the target selector
     * @param command the command to run
     */
    //% block="as %selector at @s run %command"
    //% selector.defl="@a"
    //% command.defl="say hello"
    //% weight=100
    //% inlineInputMode=inline
    export function runAsAt(selector: string, command: string): void {
        player.execute("execute as " + selector + " at @s run " + command)
    }

    /**
     * Execute a command at a target's location
     * @param selector the target selector
     * @param command the command to run
     */
    //% block="at %selector run %command"
    //% selector.defl="@a"
    //% command.defl="setblock ~ ~ ~ stone"
    //% weight=99
    //% inlineInputMode=inline
    export function runAt(selector: string, command: string): void {
        player.execute("execute at " + selector + " run " + command)
    }

    /**
     * Execute a command as a target
     * @param selector the target selector
     * @param command the command to run
     */
    //% block="as %selector run %command"
    //% selector.defl="@a"
    //% command.defl="say test"
    //% weight=98
    //% inlineInputMode=inline
    export function runAs(selector: string, command: string): void {
        player.execute("execute as " + selector + " run " + command)
    }

    // ==================== IF CONDITIONS (★★★ 必須レベル) ====================

    /**
     * Execute a command if a block exists at the specified location
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @param block the block to check for
     * @param command the command to run
     */
    //% block="if block at %x %y %z is %block run %command"
    //% x.defl=0
    //% y.defl=60
    //% z.defl=0
    //% block.defl="stone"
    //% command.defl="say found it"
    //% weight=90
    //% inlineInputMode=inline
    export function runIfBlock(x: number, y: number, z: number, block: string, command: string): void {
        player.execute("execute if block " + x + " " + y + " " + z + " " + block + " run " + command)
    }

    /**
     * Execute a command if a block exists at relative coordinates
     * @param x the relative x offset
     * @param y the relative y offset
     * @param z the relative z offset
     * @param block the block to check for
     * @param command the command to run
     */
    //% block="if block at ~%x ~%y ~%z is %block run %command"
    //% x.defl=0
    //% y.defl=-1
    //% z.defl=0
    //% block.defl="stone"
    //% command.defl="say standing on stone"
    //% weight=89
    //% inlineInputMode=inline
    export function runIfBlockRelative(x: number, y: number, z: number, block: string, command: string): void {
        player.execute("execute if block ~" + x + " ~" + y + " ~" + z + " " + block + " run " + command)
    }

    /**
     * Execute a command if an entity exists matching the selector
     * @param selector the target selector
     * @param command the command to run
     */
    //% block="if entity %selector run %command"
    //% selector.defl="@e[type=creeper]"
    //% command.defl="say creeper found"
    //% weight=88
    //% inlineInputMode=inline
    export function runIfEntity(selector: string, command: string): void {
        player.execute("execute if entity " + selector + " run " + command)
    }

    /**
     * Execute a command if a score matches a value
     * @param selector the target selector
     * @param objective the scoreboard objective
     * @param value the value to match
     * @param command the command to run
     */
    //% block="if score %selector %objective matches %value run %command"
    //% selector.defl="@s"
    //% objective.defl="score"
    //% value.defl=10
    //% command.defl="say score is 10"
    //% weight=87
    //% inlineInputMode=inline
    export function runIfScoreEquals(selector: string, objective: string, value: number, command: string): void {
        player.execute("execute if score " + selector + " " + objective + " matches " + value + " run " + command)
    }

    /**
     * Execute a command if a score is within a range
     * @param selector the target selector
     * @param objective the scoreboard objective
     * @param min the minimum value
     * @param max the maximum value
     * @param command the command to run
     */
    //% block="if score %selector %objective is between %min and %max run %command"
    //% selector.defl="@s"
    //% objective.defl="score"
    //% min.defl=1
    //% max.defl=10
    //% command.defl="say score in range"
    //% weight=86
    //% inlineInputMode=inline
    export function runIfScoreRange(selector: string, objective: string, min: number, max: number, command: string): void {
        player.execute("execute if score " + selector + " " + objective + " matches " + min + ".." + max + " run " + command)
    }

    // ==================== UNLESS CONDITIONS (★★ 結構使うレベル) ====================

    /**
     * Execute a command unless a block exists at the specified location
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @param block the block to check for
     * @param command the command to run
     */
    //% block="unless block at %x %y %z is %block run %command"
    //% x.defl=0
    //% y.defl=60
    //% z.defl=0
    //% block.defl="stone"
    //% command.defl="say not stone"
    //% weight=80
    //% inlineInputMode=inline
    export function runUnlessBlock(x: number, y: number, z: number, block: string, command: string): void {
        player.execute("execute unless block " + x + " " + y + " " + z + " " + block + " run " + command)
    }

    /**
     * Execute a command unless a block exists at relative coordinates
     * @param x the relative x offset
     * @param y the relative y offset
     * @param z the relative z offset
     * @param block the block to check for
     * @param command the command to run
     */
    //% block="unless block at ~%x ~%y ~%z is %block run %command"
    //% x.defl=0
    //% y.defl=-1
    //% z.defl=0
    //% block.defl="air"
    //% command.defl="say not standing on air"
    //% weight=79
    //% inlineInputMode=inline
    export function runUnlessBlockRelative(x: number, y: number, z: number, block: string, command: string): void {
        player.execute("execute unless block ~" + x + " ~" + y + " ~" + z + " " + block + " run " + command)
    }

    /**
     * Execute a command unless an entity exists matching the selector
     * @param selector the target selector
     * @param command the command to run
     */
    //% block="unless entity %selector run %command"
    //% selector.defl="@e[type=creeper]"
    //% command.defl="say no creeper"
    //% weight=78
    //% inlineInputMode=inline
    export function runUnlessEntity(selector: string, command: string): void {
        player.execute("execute unless entity " + selector + " run " + command)
    }

    /**
     * Execute a command unless a score matches a value
     * @param selector the target selector
     * @param objective the scoreboard objective
     * @param value the value to match
     * @param command the command to run
     */
    //% block="unless score %selector %objective matches %value run %command"
    //% selector.defl="@s"
    //% objective.defl="score"
    //% value.defl=10
    //% command.defl="say score is not 10"
    //% weight=77
    //% inlineInputMode=inline
    export function runUnlessScoreEquals(selector: string, objective: string, value: number, command: string): void {
        player.execute("execute unless score " + selector + " " + objective + " matches " + value + " run " + command)
    }

    /**
     * Execute a command unless a score is within a range
     * @param selector the target selector
     * @param objective the scoreboard objective
     * @param min the minimum value
     * @param max the maximum value
     * @param command the command to run
     */
    //% block="unless score %selector %objective is between %min and %max run %command"
    //% selector.defl="@s"
    //% objective.defl="score"
    //% min.defl=1
    //% max.defl=10
    //% command.defl="say score not in range"
    //% weight=76
    //% inlineInputMode=inline
    export function runUnlessScoreRange(selector: string, objective: string, min: number, max: number, command: string): void {
        player.execute("execute unless score " + selector + " " + objective + " matches " + min + ".." + max + " run " + command)
    }

    // ==================== POSITIONED & FACING (★ 使うときは使うレベル) ====================

    /**
     * Execute a command at a specific position
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @param command the command to run
     */
    //% block="positioned %x %y %z run %command"
    //% x.defl=0
    //% y.defl=60
    //% z.defl=0
    //% command.defl="setblock ~ ~ ~ stone"
    //% weight=70
    //% inlineInputMode=inline
    export function runPositioned(x: number, y: number, z: number, command: string): void {
        player.execute("execute positioned " + x + " " + y + " " + z + " run " + command)
    }

    /**
     * Execute a command at a relative position
     * @param x the relative x offset
     * @param y the relative y offset
     * @param z the relative z offset
     * @param command the command to run
     */
    //% block="positioned ~%x ~%y ~%z run %command"
    //% x.defl=0
    //% y.defl=5
    //% z.defl=0
    //% command.defl="setblock ~ ~ ~ stone"
    //% weight=69
    //% inlineInputMode=inline
    export function runPositionedRelative(x: number, y: number, z: number, command: string): void {
        player.execute("execute positioned ~" + x + " ~" + y + " ~" + z + " run " + command)
    }

    /**
     * Execute a command facing a specific position
     * @param x the x coordinate to face
     * @param y the y coordinate to face
     * @param z the z coordinate to face
     * @param command the command to run
     */
    //% block="facing %x %y %z run %command"
    //% x.defl=0
    //% y.defl=60
    //% z.defl=0
    //% command.defl="particle minecraft:heart_particle ^ ^ ^2"
    //% weight=68
    //% inlineInputMode=inline
    export function runFacing(x: number, y: number, z: number, command: string): void {
        player.execute("execute facing " + x + " " + y + " " + z + " run " + command)
    }

    /**
     * Execute a command facing an entity
     * @param selector the target selector to face
     * @param anchor the anchor point (feet or eyes)
     * @param command the command to run
     */
    //% block="facing entity %selector %anchor run %command"
    //% selector.defl="@p"
    //% command.defl="tp @s ^ ^ ^0.2"
    //% weight=67
    //% inlineInputMode=inline
    export function runFacingEntity(selector: string, anchor: AnchorPoint, command: string): void {
        let anchorName = anchor === AnchorPoint.Eyes ? "eyes" : "feet"
        player.execute("execute facing entity " + selector + " " + anchorName + " run " + command)
    }

    // ==================== COMBINED & ADVANCED ====================

    /**
     * Execute a custom execute command (for advanced users)
     * @param subcommands the execute subcommands (without "execute" and "run")
     * @param command the command to run
     */
    //% block="execute %subcommands run %command"
    //% subcommands.defl="as @a at @s"
    //% command.defl="say hello"
    //% weight=50
    //% inlineInputMode=inline
    //% advanced=true
    export function executeRaw(subcommands: string, command: string): void {
        player.execute("execute " + subcommands + " run " + command)
    }

    /**
     * Execute a command as a target, at their location, facing another entity
     * @param asSelector the target to execute as
     * @param facingSelector the target to face
     * @param anchor the anchor point (feet or eyes)
     * @param command the command to run
     */
    //% block="as %asSelector at @s facing entity %facingSelector %anchor run %command"
    //% asSelector.defl="@e[tag=mob]"
    //% facingSelector.defl="@p"
    //% command.defl="tp @s ^ ^ ^0.2"
    //% weight=49
    //% inlineInputMode=inline
    //% advanced=true
    export function runAsAtFacingEntity(asSelector: string, facingSelector: string, anchor: AnchorPoint, command: string): void {
        let anchorName = anchor === AnchorPoint.Eyes ? "eyes" : "feet"
        player.execute("execute as " + asSelector + " at @s facing entity " + facingSelector + " " + anchorName + " run " + command)
    }
}
