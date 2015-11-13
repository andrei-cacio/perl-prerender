use Dancer2;
use Template;
use WWW::Mechanize::PhantomJS;

set port => 3001;

get '/' => sub {
    my $file = './public/grid.html';
    my $mech = WWW::Mechanize::PhantomJS->new(
        autodie => 0,
        log => 'ON',
        port => 8081
    );

    $mech->get('http://localhost:3000');

    # open(my $HTML, '>', "$file") or die "Cannot open $file: $!";

    # print $_->{message}
    #     for $mech->js_errors();

    my $htmlContent = $mech->content;
    $htmlContent =~ s/(\<script.*\>.*?\<\/script\>)//s;

    return $htmlContent;

    # print $HTML $htmlContent;

    # close($HTML)
};

dance;