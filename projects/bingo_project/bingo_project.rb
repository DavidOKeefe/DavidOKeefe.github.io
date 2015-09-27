require 'sinatra'

get '/' do
  @bingo = BingoBoard.new
  @bingo.bingo_board
  erb :index
end

get 'play_game' do
  @bingo = BingoBoard.new
  @bingo.play_game
  erb :play_game
end





class BingoBoard
  # include BingoBoardBuilder
  BINGO_LETTERS = [ "B", "I", "N", "G", "O" ]

  attr_reader :bingo_board

  def initialize(board)
    @bingo_board = build_board
  end

  def play_game
    until winning_board do
      pp "The selected ball is #{selected_ball[0]}, #{selected_ball[1]}."
      sleep 0.2
      check_board_for_match
      pp "Your board is now:"
      pp @bingo_board
      sleep 0.2
      return_ball_to_bin
    end
    puts WINNING_MESSAGE
  end

private
  def build_board
    board = [[],[],[],[],[]]
    starting_number = 1
    ending_number = 15
    5.times do
      board.map do |column|
        column << rand(starting_number..ending_number)
      end
      starting_number += 15
      ending_number += 15
    end
    board[2][2] = "X"
    board
  end

  def selected_ball
    @selected_ball ||= random_ball
  end

  def return_ball_to_bin
    @selected_ball = nil
  end

  def random_ball
    random_ball = [BINGO_LETTERS.sample]
    if random_ball == ["B"]
      random_ball << rand(1..15)
    elsif random_ball == ["I"]
      random_ball << rand(16..30)
    elsif random_ball == ["N"]
      random_ball << rand(31..45)
    elsif random_ball == ["G"]
      random_ball << rand(46..60)
    elsif random_ball == ["O"]
      random_ball << rand(61..75)
    end
    random_ball
  end

  def check_board_for_match
    selected_letter_column = BINGO_LETTERS.index(selected_ball[0])
    @bingo_board.map do |row|
      if row[selected_letter_column] == selected_ball[1]
        row[selected_letter_column] = "X"
      end
    end
  end

  def winning_board
    (@bingo_board[0][0] == "X" && @bingo_board[1][0] == "X" && @bingo_board[2][0] == "X" && @bingo_board[3][0] == "X" && @bingo_board[4][0] == "X") ||
    (@bingo_board[0][1] == "X" && @bingo_board[1][1] == "X" && @bingo_board[2][1] == "X" && @bingo_board[3][1] == "X" && @bingo_board[4][1] == "X") ||
    (@bingo_board[0][2] == "X" && @bingo_board[1][2] == "X" && @bingo_board[2][2] == "X" && @bingo_board[3][2] == "X" && @bingo_board[4][2] == "X") ||
    (@bingo_board[0][3] == "X" && @bingo_board[1][3] == "X" && @bingo_board[2][3] == "X" && @bingo_board[3][3] == "X" && @bingo_board[4][3] == "X") ||
    (@bingo_board[0][4] == "X" && @bingo_board[1][4] == "X" && @bingo_board[2][4] == "X" && @bingo_board[3][4] == "X" && @bingo_board[4][4] == "X") ||
    (@bingo_board[0][0] == "X" && @bingo_board[0][1] == "X" && @bingo_board[0][2] == "X" && @bingo_board[0][3] == "X" && @bingo_board[0][4] == "X") ||
    (@bingo_board[1][0] == "X" && @bingo_board[1][1] == "X" && @bingo_board[1][2] == "X" && @bingo_board[1][3] == "X" && @bingo_board[1][4] == "X") ||
    (@bingo_board[2][0] == "X" && @bingo_board[2][1] == "X" && @bingo_board[2][2] == "X" && @bingo_board[2][3] == "X" && @bingo_board[2][4] == "X") ||
    (@bingo_board[3][0] == "X" && @bingo_board[3][1] == "X" && @bingo_board[3][2] == "X" && @bingo_board[3][3] == "X" && @bingo_board[3][4] == "X") ||
    (@bingo_board[4][0] == "X" && @bingo_board[4][1] == "X" && @bingo_board[4][2] == "X" && @bingo_board[4][3] == "X" && @bingo_board[4][4] == "X") ||
    (@bingo_board[0][0] == "X" && @bingo_board[1][1] == "X" && @bingo_board[2][2] == "X" && @bingo_board[3][3] == "X" && @bingo_board[4][4] == "X") ||
    (@bingo_board[0][4] == "X" && @bingo_board[1][3] == "X" && @bingo_board[2][2] == "X" && @bingo_board[3][1] == "X" && @bingo_board[4][0] == "X")
  end

  WINNING_MESSAGE = "
     ____    ____  ______    __    __     ____    __    ____  __  .__   __.  __
     \\   \\  /   / /  __  \\  |  |  |  |    \\   \\  /  \\  /   / |  | |  \\ |  | |  |
      \\   \\/   / |  |  |  | |  |  |  |     \\   \\/    \\/   /  |  | |   \\|  | |  |
       \\_    _/  |  |  |  | |  |  |  |      \\            /   |  | |  . `  | |  |
         |  |    |  `--'  | |  `--'  |       \\    /\\    /    |  | |  |\\   | |__|
         |__|     \\______/   \\______/         \\__/  \\__/     |__| |__| \\__| (__)"
end
