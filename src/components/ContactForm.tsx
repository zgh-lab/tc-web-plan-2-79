
                <FormField 
                  control={form.control} 
                  name="honeypot" 
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input 
                          {...field} 
                          tabIndex={-1} 
                          autoComplete="off"
                          className="hidden"
                        />
                      </FormControl>
                    </FormItem>
                  )} 
                />
