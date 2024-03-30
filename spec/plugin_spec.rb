require 'rails_helper'

load File.expand_path('../helpers.rb', __FILE__)

RSpec.configure do |config|
  config.before(:all) do
    FakeWeb.allow_net_connect = false
  end
  config.include HTMLSpecHelper
end

describe 'discourse-chinese-localization-pack' do
  it 'load all authenticators' do
    ['Weibo'].each do |provider_name|
      expect(Discourse.auth_providers.any? { |a| a.authenticator.class.name.demodulize == "#{provider_name}Authenticator" }).to be_truthy
    end
  end
end
