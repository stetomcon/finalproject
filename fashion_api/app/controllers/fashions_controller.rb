class FashionsController < ApplicationController
  before_action :set_fashion, only: [:show, :update, :destroy]

  # GET /fashions
  def index
    @fashions = Fashion.all

    render json: @fashions
  end

  # GET /fashions/1
  def show
    render json: @fashion
  end

  # POST /fashions
  def create
    @fashion = Fashion.new(fashion_params)

    if @fashion.save
      render json: @fashion, status: :created, location: @fashion
    else
      render json: @fashion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fashions/1
  def update
    if @fashion.update(fashion_params)
      render json: @fashion
    else
      render json: @fashion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fashions/1
  def destroy
    @fashion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fashion
      @fashion = Fashion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def fashion_params
      params.require(:fashion).permit(:image, :info, :category)
    end
end
