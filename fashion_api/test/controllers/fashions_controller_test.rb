require 'test_helper'

class FashionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fashion = fashions(:one)
  end

  test "should get index" do
    get fashions_url, as: :json
    assert_response :success
  end

  test "should create fashion" do
    assert_difference('Fashion.count') do
      post fashions_url, params: { fashion: { category: @fashion.category, image: @fashion.image, info: @fashion.info } }, as: :json
    end

    assert_response 201
  end

  test "should show fashion" do
    get fashion_url(@fashion), as: :json
    assert_response :success
  end

  test "should update fashion" do
    patch fashion_url(@fashion), params: { fashion: { category: @fashion.category, image: @fashion.image, info: @fashion.info } }, as: :json
    assert_response 200
  end

  test "should destroy fashion" do
    assert_difference('Fashion.count', -1) do
      delete fashion_url(@fashion), as: :json
    end

    assert_response 204
  end
end
