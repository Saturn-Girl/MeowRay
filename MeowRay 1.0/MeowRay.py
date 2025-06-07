import webview
import os
import ctypes

class game:

    def Start(self):
        if os.path.exists("WebData/index.html"):
            html_path = os.path.abspath("WebData/index.html")
            url = f"file://{html_path}"
            print(f"Info: using html file from {html_path} as {url}")
            webview.create_window("MeowRay 1.0", url)
            webview.start()
        else:
            print("Info : Cannot find the html file")
    def dll(self):
        if os.path.exists("Data/x86_dll.dll"):
            assembly_function = ctypes.CDLL("Data/x86_dll.dll")
            print(f"Info : {assembly_function}")
        else:
            print("DLL not found")


game = game()
game.Start()
game.dll()    

