; (function ($) {
    'use strict';

    function communityTabs() {
        var $communityTabsItem = $('.community-tabs-container-outer .nav-tabs li');
        $communityTabsItem.each(function(){
            var $this = $(this);
            var $badge = $this.find('.badge');
            if ($badge.text() === "0") {
                $badge.addClass('hidden');
            }else {
                $badge.removeClass('hidden');
            }
        });
        
    }

    function discussionsMore() {
        var $HLDiscussions = $(".HLDiscussions");
        var $bottomLink = $HLDiscussions.find(".Content > .row >.col-md-12 >.btn-default");
        var $bottomLinkUrl = $bottomLink.attr("href");
        var $html = '<a title="View more discussions" class="btn btn-default heading-more-button" href="'+ $bottomLinkUrl +'">More</a>';
        var $title = $HLDiscussions.find(".heading h2");
        $title.append($html);
    }

    function init() {
        communityTabs();
        discussionsMore();
    }

    $(document).ready(function () {
        init();
    })

})(jQuery);