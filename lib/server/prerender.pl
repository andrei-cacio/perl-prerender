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

    my $htmlContent = $mech->content;
    $htmlContent =~ s/(\<script.*\>.*?\<\/script\>)//s;

    return $htmlContent;
};

get '/:rows' => sub {
    my $file = './public/grid.html';
    my $mech = WWW::Mechanize::PhantomJS->new(
        autodie => 0,
        log => 'ON',
        port => 8081
    );

    $mech->get('http://localhost:3000/' . params->{rows});

    my $htmlContent = $mech->content;
    $htmlContent =~ s/(\<script.*\>.*?\<\/script\>)//s;

    return $htmlContent;
};

dance;