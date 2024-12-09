$(()=>{

    /////////////
    // Join Us Offers Section
    const JoinUsOffersSection = $('section.join-us');
    const OfferCustomInput = JoinUsOffersSection.find('input#join-us-offer-custom-input');

    OfferCustomInput.mask('R$000,00');

    /////////////
    // Contact Section
    const ContactSection = $('section.contact');
    const HoverButtons = ContactSection.find('div a, div i');

    HoverButtons.on('mouseover', (event)=>{

        ContactSection.find('.container').find('div').removeClass('contact-active-hover');
            
        if($(event.target).is('a')){
            $(event.target).parent().parent().addClass('contact-active-hover');
            return;

        }

        $(event.target).parent().parent().parent().addClass('contact-active-hover');
        return;

    });

});
