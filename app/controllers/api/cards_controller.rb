class Api::CardsController < ApplicationController

    def create
        
        @card = Card.new(card_params)
        @card.author_id = current_user.id
        if @card.save
            render :show
        else
            # render json: @card.errors.full_messages, status: 400
            render json: ["Please don't leave empty"], status: 400
        end
    end

    def show
       
        @card = current_user.decks.find_by(params[:id])
    end

    def destroy
        @card = Card.find(params[:id])

        if @card
            @card.destroy!
            render :show
        else
            render json: @card.errors.full_messages, status: 400
        end
    end

    private

    def card_params
        params.require(:card).permit(:question, :answer, :deck_id)
    end
    
end