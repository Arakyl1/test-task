let carts=$(".proguct-cart"),col=$(".col"),buttonSey=$(".additional-info a");$(carts).click(function(){$(this).parents().hasClass("not-on-sale")||($(this).parents().hasClass("active")?($(this).parents(".col").removeClass("active"),$(this).removeClass("active")):($(this).parents(".col").addClass("active"),$(this).addClass("active")))}),$(buttonSey).click(function(){$(this).parents(".col").addClass("active"),$(carts).addClass("active")}),$(col).on("mouseover",function(){$(this).hasClass("active")&&$(this).children(carts).hasClass("active")&&$(".business-name",this).replaceWith("<p class='business-name'>Сказочное заморское яство</p>")}),$(col).on("mouseout",function(){$(this).hasClass("active")&&$(this).children(carts).hasClass("active")&&$(".business-name",this).replaceWith("<p class='business-name' style=' color: #d91667;'>Котэ не одобряет?</p>")});