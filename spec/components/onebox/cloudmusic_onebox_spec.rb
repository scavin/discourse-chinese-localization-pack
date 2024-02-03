require 'rails_helper'
load File.expand_path('../../../helpers.rb', __FILE__)

describe Onebox::Engine::CloudMusicOnebox do
  before do
    FakeWeb.register_uri(:get, 'http://music.163.com/#/song?id=691506', body: response('cloudmusic'), content_type: 'text/html')
  end

  it 'returns object as the placeholder' do
    expect(Onebox.preview('http://music.163.com/#/song?id=691506').placeholder_html).to match(/iframe/)
  end
end
