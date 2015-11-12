use Dancer2;
use Template;

get '/' => sub {
    template 'index', {
        title => 'Prerender'
    };
};

dance;