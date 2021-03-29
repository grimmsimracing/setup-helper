const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

client.on('message', (msg) => {

    if (msg.content=="?setup help"){
        var response = "These are the available commands for setup help"+"\n\n"+
        "?setup understeer high speed entry"+"\n"+
        "?setup understeer high speed apex"+"\n"+
        "?setup understeer high speed exit"+"\n"+
        "?setup understeer low speed entry"+"\n"+
        "?setup understeer low speed apex"+"\n"+
        "?setup understeer low speed exit"+"\n\n"+

        "?setup oversteer high speed entry"+"\n"+
        "?setup oversteer high speed apex"+"\n"+
        "?setup oversteer high speed exit"+"\n"+
        "?setup oversteer low speed entry"+"\n"+
        "?setup oversteer low speed apex"+"\n"+
        "?setup oversteer low speed exit"+"\n\n"+

        "?setup car bounces on kerbs/bumps"+"\n"+
        "?setup high speed understeer to oversteer"+"\n"+
        "?setup low speed understeer to oversteer"+"\n\n"+

        "?setup tire pressure"+"\n"+
        "?setup tires overheating"+"\n"+
        "?setup tires cold"+"\n\n"+

        "?setup: brake pads";

        msg.channel.send(response);
    }

    else if(msg.content=='?setup understeer high speed entry'){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 1 click lower rear wing"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- Less front braking balance"+"\n"+
        "- Less preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup understeer high speed apex"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 1 click lower rear wing"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- Less preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup understeer high speed exit"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 1 click lower rear wing"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- Lower rear bumpstop range to 15 and then lower slowly from there and check results, (advice to keep rear bumpstop rate as low as possible)"+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- Less Traction Control"+"\n"+
        "- Less preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup understeer low speed entry"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- Less front braking balance"+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- 1 click lower front wheel rate"+"\n"+
        "- 1 click lower front antiroll bar"+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- Less preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup understeer low speed apex"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- 1 click lower front wheel rate"+"\n"+
        "- 1 click lower front antiroll bar"+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- Less preload"+"\n\n"+
        "Generic:"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup understeer low speed exit"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher front bumpstop range"+"\n"+
        "- 1 click lower front bumpstop rate"+"\n"+
        "- Less Traction Control"+"\n"+
        "- 1 click lower front wheel rate"+"\n"+
        "- 1 click lower front antiroll bar"+"\n"+
        "- 1 click higher rear antiroll bar"+"\n"+
        "- 1mm lower front ride height"+"\n"+
        "- 2mm higher rear height"+"\n"+
        "- More preload"+"\n\n"+
        "Generic:"+"\n"+
        "- More front negative camber"+"\n"+
        "- Less rear negative camber"+"\n"+
        "- Less rear toe";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer high speed entry"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher rear wing"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n"+
        "- More front braking balance"+"\n"+
        "- More preload"+"\n\n"+
        "Generic:"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear negative camber"+"\n"+
        "- More rear toe";
          
        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer high speed apex"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher rear wing"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n"+
        "- More preload"+"\n\n"+
        "Generic:"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear negative camber"+"\n"+
        "- More rear toe";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer high speed exit"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher rear wing"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n\n"+
        "Generic:"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear toe";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer low speed entry"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- More front braking balance"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n"+
        "- 1 click higher front wheel rate"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1 click higher front antiroll bar"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- More preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear negative camber"+"\n"+
        "- More rear toe";

        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer low speed apex"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click higher front wheel rate"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1 click higher front antiroll bar"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n"+
        "- More preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear negative camber"+"\n"+
        "- More rear toe";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup oversteer low speed exit"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- Higher TC level"+"\n"+
        "- Max rear bumpstop range (avoid touching the bumpstops under acceleration)"+"\n"+
        "- 2mm lower rear height"+"\n"+
        "- 1 click higher front wheel rate"+"\n"+
        "- 1 click higher front antiroll bar"+"\n"+
        "- 1mm higher front ride height"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 1 click higher front bumpstop rate"+"\n"+
        "- Less preload"+"\n\n"+
        "**Generic:**"+"\n"+
        "- Less front negative camber"+"\n"+
        "- More rear toe";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup car bounces on kerbs/bumps"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 2 click higher front bumpstop range"+"\n"+
        "- 2 click lower front bumpstop rate"+"\n"+
        "- 1 click lower front antiroll bar"+"\n"+
        "- 1 click lower rear antiroll bar"+"\n"+
        "- Adjust fast bump and rebound dampers."+"\n"+
        "There is no easy way to give a rule of thumb. Normally you should use a soft fast bump and a bit higher fast rebound. But if your suspension is stiff, you might see that the lower you go the worse it gets. If that’s the case you need to raise fast bump to a much higher value(stiffer) and then fine tune again. This happens because you need to control how much energy the spring absorbs from hitting a kerb (bump). All this energy needs to be released (rebound). If your damper is too soft, it will permit the spring to accumulate too much energy and you won’t be able to control it (jump). Also, because dampers are magic.";
        msg.channel.send(response);
    }

    else if(msg.content=="?setup high speed understeer to oversteer"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "From more to less influence."+"\n"+
        "- 1 clicks stiffer (higher numbers) wheel rates all around"+"\n"+
        "- 1 click lower front bumpstop range"+"\n"+
        "- 2 clicks stiffer slow dampers all around"+"\n"+
        "- 1 click higher rear wing";

        msg.channel.send(response);
    }

    else if(msg.content=="?setup low speed understeer to oversteer"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- 1 click stiffer (higher numbers) front wheel rates"+"\n"+
        "- 1 clicks softer (lower numebrs) slow dampers all around"+"\n"+
        "- 2mm lower rear ride height";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup tire pressure"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "Here are the ideal tyre pressures range."+"\n\n"+
        "All GT3 dry slicks: 27.4-28.0 psi"+"\n"+
        "All GT3 wet tyres: 29.5-30.5 psi"+"\n\n"+
        
        "All GT4 dry slicks: 26.5-27.5 psi"+"\n"+
        "All GT4 wet tyres: 29.5-30.5 psi";
        
        msg.channel.send(response);
    }

    else if(msg.content=="?setup tires overheating"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- Driving style is the most important factor"+"\n"+
        "- Open brake ducts (higher numbers)"+"\n"+
        "- Less negative camber"+"\n"+
        "- Less toe"+"\n"+
        "- 2 clicks softer fast dampers"+"\n"+
        "- 2 clicks softer slow dampers"+"\n"+
        "- Higher ABS and TC levels";
         
        msg.channel.send(response);
    }

    else if(msg.content=="?setup tires cold"){
        var response = "Taking into consideration that your tire pressures are optimal, try adjust accordingly (one step at a time). The order is more influence to less influence."+"\n"+
        "- Close brake ducts (lower numbers)"+"\n"+
        "- More negative camber"+"\n"+
        "- More toe"+"\n"+
        "- 2 clicks stiffer fast dampers"+"\n"+
        "- 2 clicks stiffer slow dampers"+"\n"+
        "- Lower ABS and TC levels";

        msg.channel.send(response);
    }

    else if(msg.content=="?setup brake pads"){
        var response = "Brake pads and brake discs wear is relative to the brake pad choice, temperatures, driving style, ABS and brake bias usage. Brake disc and pad wear is shown at the end of each driving session, when you return to your strategy setup UI on the last readings box."+"\n"+
        "Additionally brake pads consumption will appear as a red dot in the center of the brake discs heat visualisation in the tyre and brakes HUD, when brake pads are under 10mm thickness."+"\n\n"+
        
        "Pad 1: Very aggressive friction coefficient, max braking performance, aggressive disc and pad wear. Pedal modulation can be tricky if out of temperature or as it wears down. Use in hotlap and qualifying sessions, sprint races and can withstand 3 hours races. Risky and dangerous to use over 3 or 4 hours because the pads will wear down, overheat and lose linearity in brake pedal feel."+"\n\n"+
        
        "Pad 2: Very Good friction coefficient, very good braking performance, good disc and pad wear. Pedal modulation almost always good and linear, good feedback while overheating and gradual wear. Perfect for endurance racing, but can also be used in hotlap , qualifying sessions as well as sprint races as what it loses in performance, regains in braking modulation and predictability. The default choice for long endurance races, easily makes 12 hours and can make 24 hours race too with a bit of care. Will also overheat and lose linearity in brake pedal feel when worn out, but in a more predictable way and after much longer stints. Because of the lower friction, you could possibly use smaller brake ducts."+"\n\n"+
        
        "Pad 3: Moderate friction coefficient, braking zones can be longer in dry, very moderate disc and pad wear. Excellent pedal modulation also in cold ambient conditions, very linear pedal feedback. Excellent choice for wet conditions and very long endurance races. Very predictable and easy to modulate brake pad."+"\n\n"+
        
        "Pad 4: Identical to pad1 but with exaggerated wear for fade demonstration purposes.";
        
        msg.channel.send(response);
    }



/*

  var input = msg.content.split(" ");

  if(input[0]=='setup' && input[1]=='helping'){
      msg.channel.send('**Usage:** ?fuel (Race/Stint time in mins,Average laptime in seconds,Fuel consumption per lap\n)**Example:**?fuel 67,98.500,3.30');
  }else if(input[0]=='?fuel' && input[1]!='help'){

    var second_argument = input[1];
    var args = second_argument.split(",");
    var stint_time = args[0];
    var avg_laptime = args[1];
    var fc = args[2];
    var total_laps = parseFloat(stint_time*60)/parseFloat(avg_laptime);
    total_laps = Math.ceil(total_laps);
    var total_fuel = Math.ceil(total_laps * parseFloat(fc));
    //msg.channel.send('**Total Fuel Required:** ' + total_fuel + ' Litres');
    msg.channel.send("**Total Fuel Required: **" + total_fuel + "litres");
  }
*/



});