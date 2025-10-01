def main_function():
    print("Program started.")
    while True:
        # Code to be executed repeatedly
        user_input = input("Enter 'quite' to exit: ")
        if user_input.lower()=='quite':
            break # Exit the main loop
        print(f"You  entered: {user_input}")
    print("Program finished.")

if __name__ == "__main__":
    main_function() 

#This code is for a GUI
#    import tkinter as tk

#def create_gui():
#    root = tk.Tk()
#    root.title("My GUI App")

#    label = tk.Label(root, text="Hello, Tkinter!")
#    label.pack()

    # This is the main loop for Tkinter
#    root.mainloop()

#if __name__ == "__main__":
#    create_gui()