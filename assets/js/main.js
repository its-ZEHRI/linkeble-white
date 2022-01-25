$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.rectangle-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    });
    $('.gigslider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    //    LOGIN , SIGNIN, FORGOT
    $(this).on("click", "#nav-sign-btn", function() {
        $("#login-form").removeClass("d-none");
    });
    $(this).on("click", "#become-seller-btn", function() {
        $("#become-seller-section").removeClass("d-none");
    });
    $(this).on("click", "#join-btn", function() {
        $("#login-form").addClass("d-none");
        $("#signup-form").removeClass("d-none");
    });
    // $(this).on("click", "#signin-btn", function() {
    //     $("#login-form").removeClass("d-none");
    //     $("#signup-form").addClass("d-none");
    // });
    $(this).on("click", "#form-sign-in-btn", function(e) {
        e.preventDefault();
        $("#login-form").addClass("d-none");
        $("#become-seller-section").removeClass("d-none");
    });
    $(this).on("click", "#form-sign-up-btn", function(e) {
        e.preventDefault();
        $("#login-form").removeClass("d-none");
        $("#signup-form").addClass("d-none");
    });
    $(this).on("click", "#forgot-btn", function() {
        $("#login-form").addClass("d-none");
        $("#forgot-form").removeClass("d-none");
    });
    $(this).on("click", "#send-code-btn", function(e) {
        e.preventDefault();
        $("#forgot-form").addClass("d-none");
        $("#get-otp-form").removeClass("d-none");
    });
    $(this).on("click", "#verify-and-continue-btn", function(e) {
        e.preventDefault();
        $("#get-otp-form").addClass("d-none");
        $("#change-pwd-form").removeClass("d-none");
    });
    $(this).on("click", "#change-pwd-btn", function(e) {
        e.preventDefault();
        $("#change-pwd-form").addClass("d-none");
        $("#login-form").removeClass("d-none");
    });

    $(this).on("click", "#exit_become_seller_model", function() {
        $("#become-seller-section").addClass("d-none");
    });
    // MAIN FORM IN START
    $(this).on('click', '#exit_sign_in_model', function() {
        $('#login-form').addClass('d-none');
    });
    $(this).on('click', '#exit_sign_up_model', function() {
        $('#signup-form').addClass('d-none');
    });
    $(this).on('click', '#exit_forgot_model', function() {
        $('#forgot-form').addClass('d-none');
    });
    $(this).on('click', '#back_forgot_model', function() {
        $('#forgot-form').addClass('d-none');
        $('#login-form').removeClass('d-none');
    });

    $(this).on("click", "#exit_get_otp_model", function() {
        $("#get-otp-form").addClass("d-none");
    });
    $(this).on('click', '#back_get_otp_model', function() {
        $('#get-otp-form').addClass('d-none');
        $('#forgot-form').removeClass('d-none');
    });

    $(this).on("click", "#exit_change_pwd_model", function() {
        $("#change-pwd-form").addClass("d-none");
    });
    // MAIN FORM IN END
    /////////////////////////
    // FOR OTP MESSAGE
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

    $(this).on('click', '#reset_OTP_number', function() {
        $('.digit-group input').val('');

    });
    //    START-----  FUNCTIONS FOR CHOOSEN FILE IN SERVICES PAGE 
    $(this).on("click", "#file-upload-btn", function() {
        $("#file-upload").click();
    });
    $(this).on("change", "#file-upload", function() {
        var file_name = $("#file-upload").val().split('\\').pop();
        $("#file-name").text(file_name);
        $("#choosen-file").removeClass("d-none");
    });
    $(this).on("click", "#clear-file", function() {
        $("#file-upload").val("");
        $("#choosen-file").addClass("d-none");
    });
    $(this).on("keyup", "#message_word_count", function() {
        var count = this.value.length;
        $("#word_count").text(count);
    });
    //    END-----  FUNCTIONS FOR CHOOSEN FILE IN SERVICES PAGE
    $(this).on("click", "#reviews-btn", function() {
        $("#reviews-btn").css("color", "#00966B");
        $(".reviews-area").css("background-color", "#00966B");
        $("#services-btn").css("color", "#fff")
        $(".services-area").css("background-color", "#fff");
        $("#services").addClass("d-none");
        $("#reviews").removeClass("d-none");
    });
    $(this).on("click", "#services-btn", function() {
        $("#reviews-btn").css("color", "#fff");
        $(".reviews-area").css("background-color", "#fff");
        $("#services-btn").css("color", "#00966B")
        $(".services-area").css("background-color", "#00966B");
        $("#reviews").addClass("d-none");
        $("#services").removeClass("d-none");
    });
    /////////////////
    $(this).on("click", "#basic-btn", function() {
        $("#standard-section").addClass("d-none");
        $("#premium-section").addClass("d-none");
        $("#basic-section").removeClass("d-none");
        $("#standard-btn").removeClass("active-package,fw-bold");
        $("#premium-btn").removeClass("active-package,fw-bold");
        $("#standard-btn").addClass("text-muted");
        $("#premium-btn").addClass("text-muted");
        $("#basic-btn").addClass("fw-bold");
        $("#basic-btn").removeClass("text-muted");
    });
    $(this).on("click", "#standard-btn", function() {
        $("#basic-section").addClass("d-none");
        $("#premium-section").addClass("d-none");
        $("#standard-section").removeClass("d-none");
        $("#basic-btn").removeClass("active-package,fw-bold");
        $("#premium-btn").removeClass("active-package,fw-bold");
        $("#basic-btn").addClass("text-muted");
        $("#premium-btn").addClass("text-muted");
        $("#standard-btn").addClass("fw-bold");
        $("#standard-btn").removeClass("text-muted");
    });
    $(this).on("click", "#premium-btn", function() {
        $("#basic-section").addClass("d-none");
        $("#standard-section").addClass("d-none");
        $("#premium-section").removeClass("d-none");
        $("#basic-btn").removeClass("active-package,fw-bold");
        $("#standard-btn").removeClass("active-package,fw-bold");
        $("#basic-btn").addClass("text-muted");
        $("#standard-btn").addClass("text-muted");
        $("#premium-btn").addClass("fw-bold");
        $("#premium-btn").removeClass("text-muted");
    });
    ///////////////////////////
    ///     ORDER  DETAILS start
    $(this).on("click", "#order-details-continue", function() {
        $("#order-detail").addClass("d-none");
        $("#Payment").removeClass("d-none");
        $("#step-1").css("background-color", "#00966B");
        $("#num-2").css("background-color", "#00966B");
        $("#pay-clr").css("color", "#00966B");
    });
    $(this).on("click", "#pay-continue", function() {
        $("#Payment").addClass("d-none");
        $("#place-order").removeClass("d-none");
        $("#step-2").css("background-color", "#00966B")
        $("#num-3").css("background-color", "#00966B")
        $("#place-order-clr").css("color", "#00966B");
    });
    $(this).on("click", "#visa-card", function() {
        $("#visa-card-select").removeClass("d-none");
        $("#visa-card").css("border", "1.5px solid #00FFF6");
        $("#master-card-select").addClass("d-none");
        $("#master-card").css("border", "none");
    });
    $(this).on("click", "#master-card", function() {
        $("#master-card-select").removeClass("d-none");
        $("#master-card").css("border", "1.5px solid #00FFF6");
        $("#visa-card-select").addClass("d-none");
        $("#visa-card").css("border", "none");
    });
    ///     ORDER DETAILS end

    // CREATE SERVICES START
    $(this).on('click', '#next_from_overview', function() {
        $('#Overview').addClass('d-none');
        $('#Pricing').removeClass("d-none");
        $('.create-service-indicator-1').addClass('active-create-service-indicator');
        $('.create-service-indicator-2').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_2').removeClass('text-muted');
    });
    $(this).on('click', '#next_from_pricing', function() {
        $('#Pricing').addClass('d-none');
        $('#Requirements').removeClass("d-none");
        $('.create-service-indicator-3').addClass('active-create-service-indicator');
        $('.create-service-indicator-4').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_3').removeClass('text-muted');
    });
    $(this).on('click', '#back_from_pricing', function() {
        $('#Pricing').addClass('d-none');
        $('#Overview').removeClass("d-none");
        $('.create-service-indicator-1').removeClass('active-create-service-indicator');
        $('.create-service-indicator-2').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_2').addClass('text-muted');
    });
    $(this).on('click', '#next_from_requirements', function() {
        $('#Requirements').addClass('d-none');
        $('#Mockup').removeClass("d-none");
        $('.create-service-indicator-5').addClass('active-create-service-indicator');
        $('.create-service-indicator-6').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_4').removeClass('text-muted');
    });
    $(this).on('click', '#back_from_requirements', function() {
        $('#Requirements').addClass('d-none');
        $('#Pricing').removeClass("d-none");
        $('.create-service-indicator-4').removeClass('active-create-service-indicator');
        $('.create-service-indicator-3').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_3').addClass('text-muted');
    });
    $(this).on('click', '#back_from_mockup_design', function() {
        $('#Requirements').removeClass('d-none');
        $('#Mockup').addClass("d-none");
        $('.create-service-indicator-5').removeClass('active-create-service-indicator');
        $('.create-service-indicator-6').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_4').addClass('text-muted');
    });
    $(this).on('click', '#Publish_my_overview', function() {
        $('#Mockup').addClass('d-none');
        $('#Service_done').removeClass('d-none');
        $('.create-service-indicator-7').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_5').removeClass('text-muted');


    });
    // CREATE SERVICES END

    // MANAGE ORDERS START
    $(this).on('click', '#manage_order_late_btn', function() {
        $('#manage_orders_active').addClass('d-none');
        $('#manage_orders_late').removeClass('d-none');
        // $('#manage_order_active_btn').html('Active');
        $('#manage_order_active_btn').removeClass('active');
        $('#manage_order_late_btn').addClass('active');
        $('#manage_order_late_icon').removeClass('d-none');
        $('#manage_order_active_icon').addClass('d-none');

    });
    $(this).on('click', '#manage_order_active_btn', function() {
        $('#manage_orders_late').addClass('d-none');
        $('#manage_orders_active').removeClass('d-none');
        // $('#manage_order_late_btn').html('Late');
        $('#manage_order_late_btn').removeClass('active');
        $('#manage_order_active_btn').addClass('active');
        $('#manage_order_active_icon').removeClass('d-none');
        $('#manage_order_late_icon').addClass('d-none');

    });
    // MANAGE ORDERS END

    $(this).on('click', '.all-paticipants', function() {
        $('.group-members-list').slideToggle();
    });

    // SERVICES INFO PAGE START
    $(this).on('click', '#pause_btn_of_services_info', function() {
        $('#services_active_section').addClass('d-none');
        $('#services_rejected_section').addClass('d-none');
        $('#services_pause_section').removeClass('d-none');
        $('#active_btn_of_services_info').removeClass('active');
        $('#active_btn_of_services_info').html('Active');
        $('#rejected_btn_of_services_info').removeClass('active');
        $('#rejected_btn_of_services_info').html('Rejected');
        $(this).addClass('active');
        $(this).html('Pause<i class="fas fa-chevron-right ms-5"></i>');

    });
    $(this).on('click', '#active_btn_of_services_info', function() {
        $('#services_active_section').removeClass('d-none');
        $('#services_pause_section').addClass('d-none');
        $('#services_rejected_section').addClass('d-none');
        $('#pause_btn_of_services_info').removeClass('active');
        $('#pause_btn_of_services_info').html('Pause');
        $('#rejected_btn_of_services_info').removeClass('active');
        $('#rejected_btn_of_services_info').html('Rejected');
        $(this).addClass('active');
        $(this).html('Active<i class="fas fa-chevron-right ms-5"></i>');

    });
    $(this).on('click', '#rejected_btn_of_services_info', function() {
        $('#services_active_section').addClass('d-none');
        $('#services_pause_section').addClass('d-none');
        $('#services_rejected_section').removeClass('d-none');
        $('#rejected_btn_of_services_info').removeClass('d-none');
        $('#pause_btn_of_services_info').removeClass('active');
        $('#pause_btn_of_services_info').html('Pause');
        $('#active_btn_of_services_info').removeClass('active');
        $('#active_btn_of_services_info').html('Active');
        $(this).addClass('active');
        $(this).html('Rejected<i class="fas fa-chevron-right ms-5"></i>');

    });

    // SERVICES INFO PAGE END

    $('#logged_in_user_pop_up').hide();
    $('#logged_in_user_pop_up').removeClass('d-none');
    $('#bell_pop_up').hide();
    $('#bell_pop_up').removeClass('d-none');
    $(this).on('mouseover', '#navbar_online_user_image', function() {
        $('#logged_in_user_pop_up').show(100);
        $('#bell_pop_up').hide();
    });
    $(this).on('mouseleave', '#navbar_online_user_image', function() {
        $('#logged_in_user_pop_up').hide();
    });
    $(this).on('mouseover', '#navbar_bell_pop_up', function() {
        $('#bell_pop_up').show(100);
        $('#logged_in_user_pop_up').hide();
    });
    $(this).on('mouseleave', '#navbar_bell_pop_up', function() {
        $('#bell_pop_up').hide();
    });

    ///////// 
    $(this).on('click', '#select_language', function() {
        $('#language_pop_up').removeClass('d-none');
    });

    $(this).on('click', '#close_lang_popup', function() {
        $('#language_pop_up').addClass('d-none');
    });
    $(this).on('click', '#select_currency', function() {
        $('#currency_pop_up').removeClass('d-none');
    })
    $(this).on('click', '#close_currency_popup', function() {
        $('#currency_pop_up').addClass('d-none');
    });


    // ACCOUNT PAGE START
    $(this).on('click', '#account_detail_btn', function() {
        $('#notification_section').addClass('d-none');
        $('#billing_address_section').addClass('d-none');
        $('#account_details_section').removeClass('d-none');
        $('#account_notification_btn').removeClass('active');
        $('#account_billing_btn').removeClass('active');
        $('#account_notification_btn').html('Notifications');
        $('#account_billing_btn').html('Billing Address');
        $('#account_detail_btn').html('Account Details<i class="fas fa-chevron-right ms-4"></i>');
        $('#account_detail_btn').addClass('active');

    });

    $(this).on('click', '#account_notification_btn', function() {
        $('#account_details_section').addClass('d-none');
        $('#billing_address_section').addClass('d-none');
        $('#notification_section').removeClass('d-none');
        $('#account_detail_btn').removeClass('active');
        $('#account_billing_btn').removeClass('active');
        $('#account_detail_btn').html('Account Details');
        $('#account_billing_btn').html('Billing Address');
        $('#account_notification_btn').html('Notifications<i class="fas fa-chevron-right ms-4"></i>');
        $('#account_notification_btn').addClass('active');
    });

    $(this).on('click', '#account_billing_btn', function() {
        $('#account_details_section').addClass('d-none');
        $('#notification_section').addClass('d-none');
        $('#billing_address_section').removeClass('d-none');
        $('#account_detail_btn').removeClass('active');
        $('#account_notification_btn').removeClass('active');
        $('#account_detail_btn').html('Account Details');
        $('#account_notification_btn').html('Notifications');
        $('#account_billing_btn').html('Billing Address<i class="fas fa-chevron-right ms-4"></i>');
        $('#account_billing_btn').addClass('active');
    });


    // ACCOUNT PAGE END

    // PLACE ORDER PAGE START
    $(this).on('click', '#order_place_header', function() {
        $('#order_place_body').slideToggle();
    });
    $(this).on('click', '#service_requirement_header', function() {
        $('#service_requirement_body').slideToggle();
    });
    $(this).on('click', '#service_delivery_header', function() {
        $('#service_delivery_body').slideToggle();
    });
    $(this).on('click', '#service_delivery_two_header', function() {
        $('#service_delivery_two_body').slideToggle();
    });
    $(this).on('click', '#service_delivery_three_header', function() {
        $('#service_delivery_three_body').slideToggle();
    });
    $(this).on('click', '#client_rating_header', function() {
        $('#client_rating_body').slideToggle();
    });
    $(this).on('click', '#my_review_header', function() {
        $('#my_review_body').slideToggle();
    });
    $(this).on('click', '#delivery_status_header', function() {
        $('#delivery_status_body').slideToggle();
    });
    $(this).on('click', '#revision_delivery_header', function() {
        $('#revision_delivery_body').slideToggle();
    });
    $(this).on('click', '#revision_requirement_header', function() {
        $('#revision_requirement_body').slideToggle();
    });
    // PLACE ORDER PAGE END


    // CHAT POP UP START

    $(this).on('click', '#chat_page_sendOffer_btn', function() {
        $('#select_servcie_pop_up').removeClass('d-none');
    });
    $(this).on('click', '#close_select_servcie_pop_up', function() {
        $('#select_servcie_pop_up').addClass('d-none');
    });
    $(this).on('click', '.click_on_service', function() {
        $('#select_servcie_pop_up').addClass('d-none');
        $('#payment_pop_up').removeClass('d-none');
    });
    $(this).on('click', '#close_payment_pop_up', function() {
        $('#payment_pop_up').addClass('d-none');
    });
    $(this).on('click', '#create_offer_btn', function() {
        $('#hel').css('height', 'auto');
        $('#send_offer_pop_up').removeClass('d-none');
        $('#payment_pop_up').addClass('d-none');
    });
    $(this).on('click', '#close_send_offer_pop_up', function() {
        $('#send_offer_pop_up').addClass('d-none');
    });



    // CHAT POP UP END




}) //END OF MAIN FUNCTION