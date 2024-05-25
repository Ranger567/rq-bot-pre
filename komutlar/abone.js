module.exports = {
  name: "abone",
  aliases: ["a"],
  ownerOnly: true,
  code: `
$onlyForRoles[$getVar[aboneyetkili];Bu komutu kullanabilmek için <@&$getVar[aboneyetkili]> rolüne sahip olmalısın!]
  $deletecommand
  $deleteIn[300s]
$title[<:YouTube:1243602474783477830> ABONE <:YouTube:1243602474783477830>]
  $description[<@$mentioned[1]> kullanıcısına <@&$getVar[abone] rolü verildi!
  
  - Rolü veren: <@$authorID>]
  $giveRole[$guildID;$mentioned[1];$getVar[abone]]
  $color[ffffff]
  $footer[xRangeroQ Scripts;$guildIcon[$guildID]]
  `
}
